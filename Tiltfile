update_settings(max_parallel_updates=9999)

def launch_example(port, name):
  local_resource(
    name=name,
    serve_env={
      'PORT': port
    },
    serve_dir='examples/%s' % name,
    serve_cmd='pnpm start',
    cmd='pnpm install',
    dir='examples/%s' % name,
    links=['http://localhost:%s' % port],
    allow_parallel=True,
  )

def run_example(name):
  local_resource(
    name=name,
    dir='examples/%s' % name,
    cmd='pnpm install && pnpm start',
    allow_parallel=True,
  )

stackblitz_port = 6174

local_resource(
  name='stackblitz',
  serve_cmd='pnpm start',
  serve_dir='stackblitz',
  cmd='pnpm install && pnpm run generate',
  dir='stackblitz',
  serve_env={
    'PORT': '%s' % stackblitz_port,
  },
  links=['http://localhost:%s' % stackblitz_port],
  allow_parallel=True,
  auto_init=False,
)

launch_example('6175', 'webchat-embed-controls')
launch_example('6176', 'webchat-embed-custom-trigger')
launch_example('6177', 'webchat-react-composer')
launch_example('6178', 'webchat-react-custom-message')
launch_example('6179', 'webchat-react-demo')
launch_example('6180', 'webchat-react-fab')
launch_example('6181', 'webchat-react-header')
launch_example('6182', 'webchat-react-message-list')
launch_example('6183', 'webchat-client')
launch_example('6184', 'webchat-embed-user-data')
launch_example('6185', 'webchat-theme-generator')
launch_example('6186', 'webchat-embed-custom-init')
launch_example('6188', 'webchat-embed-event')

run_example('chat-client')
