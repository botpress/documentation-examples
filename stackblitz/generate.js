import { glob } from 'glob'
import { readdir, readFile, writeFile, mkdir, lstat } from 'fs/promises'
import path from 'path'

const examplesDirectory = '../examples'

const getDirectories = async source =>
  (await readdir(source, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const getFilesContent = async (directory, files) => {
  const filePromises = []

  for (const file of files) {
    if ((await lstat(file)).isDirectory()) {
      continue
    }

    filePromises.push((async () => [file.slice(directory.length + 1), await readFile(file, 'utf8')])())
  }

  const allFiles = await Promise.all(filePromises)

  return allFiles.reduce((acc, file) => {
    acc[file[0]] = file[1]
    return acc
  }, {})
}

const writeStackblitzData = async (directory, example) => {
  const files = await glob(`${directory}/**/*`, { ignore: [`${directory}/node_modules/**`, `${directory}/dist/**`] })
  const filesContent = await getFilesContent(directory, files)

  const packageJson = filesContent['package.json']

  const openFile = packageJson ? JSON.parse(packageJson)?.stackblitz?.openFile : undefined

  const data = {
    files: filesContent,
    options: {
      openFile: openFile ?? 'src/App.tsx',
    }
  }

  await writeFile(`examples/${example}.json`, JSON.stringify(data, null, 2), 'utf-8')
}

const examplesDirectories = await getDirectories(examplesDirectory)

const promises = []

await mkdir('examples', { recursive: true })
await writeFile(`examples/_projects.json`, JSON.stringify(examplesDirectories, null, 2), 'utf-8')

for (const directory of examplesDirectories) {
  const root = path.join(examplesDirectory, directory)
  promises.push(writeStackblitzData(root, directory))
}

await Promise.all(promises)

process.exit(0)
