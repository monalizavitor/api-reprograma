const model = require('../models/reprogramaModels')
const helper = require('../helpers/helpers')

const createNewPost = (req, res) => {
    (req.url)

    const { titulo, conteudo, tags, dataDeCriacao } = req.body

    const newPost = {
        //utilizando o helper
        id: helper.getNewValue(model),
        dataDeCriacao: dataDeCriacao,
        titulo: titulo,
        conteudo: conteudo,
        tags: tags
    }
    model.push(newPost)

    res.status(201).send('Post criado com sucesso!')
}


const deletePost = (req, res) => {
    (req.url)
    const { id } = req.params

    const postFilter = model.filter(item => item.id == id)[0]

    const index = model.indexOf(postFilter)

    model.splice(index, 1)

    res.status(202).send('Post deletado com sucesso.')
}

// função criada para testar a aplicação
const showPosts = (req, res) => {
    res.status(200).send(model)
}

module.exports = {
    createNewPost,
    deletePost,
    showPosts
}