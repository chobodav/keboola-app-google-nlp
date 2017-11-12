# Keboola App for Google NLP

This documentation contains information related to Keboola App for Google NLP (Nature language processing). 
It utilizes the [Cloud Natural Language API](https://cloud.google.com/natural-language) which can process and analyze the input texts.

## Functionality in a nutshell
 
The app helps you to analyze the input texts. They can be provided in two forms, **input files** and **customText**.

### Input files

This option is perfect for everybody who has files which contain some texts. The input is parsed as string and sent though Natural Language API. Once the result is known, 
the output is stored in several files group by the type of analysis. The only limitation might be **the current version of the app supports just 1 file 
per configuration**.

### Custom text

If there is a need for managing some ad-hoc tasks, this option might be useful as well. The app simply reads the data string from **customText** field and send it through 
Natural Language API. The result is also stored in the output files as in the case of input files. If you want to use this option, there are two important fields in the 
configuration which need to be specified - **customText** and **analyseCustomText**.

## Method of analysis

There are currently three methods which this apps supports - analysis of **entities**, **sentiment** and **syntax**. By default, all of them are enabled. Each of 
them is perfectly described in the **[documentation](https://cloud.google.com/natural-language) like following**:

### Analysis of entities

Identify entities and label by types such as person, organization, location, events, products and media.
 
### Analysis of sentiment

Understand the overall sentiment expressed in a block of text.

### Analysis of syntax

Extract tokens and sentences, identify parts of speech (PoS) and create dependency parse trees for each sentence.

## Configuration

It is very straightforward to setup this project. The only important parameter is **#apiKey**. You can get it 
from [Google Cloud Console](https://console.cloud.google.com) by enabling Natural Language API and creating an API key. 
You can find more information in the [Google documentation](https://support.google.com/cloud/answer/6158862?hl=en).

Here is the list of other params.

### customText + analyseCustomText

These params are important if you want to analyse custom text directly from a string (**customText**) instead of input file. 
If you prefer this option, set another field (**analyseCustomText**) to true.
 
### syntaxAnalysis

Enable syntax analysis. You don't need to specify this field. The value is set to true by default. You can set it to false if you want to skip this analysis.

### sentimentAnalysis

Enable sentiment analysis. You don't need to specify this field. The value is set to true by default. You can set it to false if you want to skip this analysis.

### entitiesAnalysis

Enable entities analysis. You don't need to specify this field. The value is set to true by default. You can set it to false if you want to skip this analysis.

## Sample configuration

You can see in following JSON how the configuration might look like. For now there is just following structure.

    {
        "#apiKey": "generated google api key",
        "customText": "abcdefg",
        "syntaxAnalysis": false,
        "entitiesAnalysis": false,
        "sentimentAnalysis": false,
        "analyseCustomText": false
    }