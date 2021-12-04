const readline = require('readline')
const converter = require("jimp")
const chalk = require('chalk')

const extensionList = [
  "png",
  "jpg"
]
console.log(`Bem vindo ao ${chalk.bold.green('Point Convert')}!\n${chalk.bold.red('Antes de iniciar, mova a imagem a ser convertida para o mesmo diretorio do programa.')}\n${chalk.bold.yellow('Siga as etapas para concluir o processo com exito.')}`)
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

entrada.question(`${chalk.bold.green('Digite o nome do arquivo (com a extensao atual): ')}`, function (answer) {
  const nameFile = answer

  entrada.question(`${chalk.bold.green('Digite a extensao (apenas png ou jpg): ')}`, function (answer2) {
    const nameExtension = answer2
    if (!extensionList.includes(nameExtension)) {
      return console.log(`${chalk.bold.red('Erro. Escolha uma extensao entre png e jpg (Não inclua pontos e utilize somente letras minusculas)')}`)
    }


    entrada.close()

    converter.read(nameFile, function (err, image) {
      if (err) {
        return console.log(`${chalk.bold.red('Imagem nao encontrada. Verifique o nome e extensao atual da imagem e tente novamente!')}`)
      } else {
        image.write(`${nameFile.slice(0, -4)}.${nameExtension}`)
        console.log(`${chalk.bold.green(`Imagem alterada para ${nameFile.slice(0, -4)}.${nameExtension} com sucesso!\nCheque o diretorio da imagem.`)}`)
      }
    })

  })
})