const kbcProcess = require('./src/kbc')

const dataDir = process.argv[2]

if (!dataDir) {
  console.error('Missing path to data dir!')
  process.exit(1)
}

kbcProcess(dataDir)


