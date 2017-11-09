const kbcProcess = require('./src/kbc')
const constants = require('./src/constants')
const dataDir = process.argv[2]

if (!dataDir) {
  console.error('Missing path to data dir!')
  process.exit(constants.EXIT_STATUS_FAILURE)
}

kbcProcess(dataDir)


