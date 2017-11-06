const _ = require('lodash')
const path = require('path')
const NLP = require('google-nlp')
const constants = require('./constants')
const { getConfig, parseConfiguration } = require('./helpers/configHelper')
const { generateCsvFiles, generateManifests, getTextFromCsvFile } = require('./helpers/csvHelper')

/**
 * This function is the main program.
 * Reads and parse the input configuration.
 * Gets the text (either from config/input file) for analyse.
 * Analyse text via NLP and generate output files.
 *
 * @param {string} dataDir - input directory.
 * @returns {undefined}
 */
module.exports = async (dataDir) => {
  console.log('dataDir: ', dataDir)
  const configFile = path.join(dataDir, constants.CONFIG_FILE)
  const inputFilesDir = path.join(dataDir, constants.INPUT_FILES_DIR)
  const outputFilesDir = path.join(dataDir, constants.OUTPUT_FILES_DIR)

  try {
    const config = parseConfiguration(getConfig(configFile))
    const textToAnalyse = !config.analyseCustomText
      ? await getTextFromCsvFile(config, inputFilesDir)
      : config.customText

    if (_.isEmpty(textToAnalyse)) {
      throw new Error('No text to analyse! Quiting the process!')
    }

    const nlp = new NLP(config.apiKey)
    const annotations = await nlp.annotateText(textToAnalyse, config.features)
    await generateCsvFiles(outputFilesDir, annotations)
    await generateManifests(outputFilesDir)
    console.log('Process of text analysis is completed!')
    process.exit(constants.EXIT_STATUS_SUCCESS)
  } catch (error) {
    console.error(error)
    process.exit(constants.EXIT_STATUS_FAILURE)
  }
}
