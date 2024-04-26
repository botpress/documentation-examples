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

launch_example('6175', 'webchat-embed-controls')
launch_example('6176', 'webchat-embed-custom-trigger')
launch_example('6177', 'webchat-react-composer')
launch_example('6178', 'webchat-react-custom-message')
launch_example('6179', 'webchat-react-demo')
launch_example('6180', 'webchat-react-fab')
launch_example('6181', 'webchat-react-header')
launch_example('6182', 'webchat-react-message-list')
