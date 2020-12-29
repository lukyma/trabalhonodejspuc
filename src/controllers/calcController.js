const getResultExpression = (req, res, next) => {
    res.status(200).send("Sucesso");
};

const getCalc = (req, res, next) => {
    res.sendFile('/web/index.html', { root: __dirname });
    //res.status(200).send('Requisição recebida com sucesso! Teste');
};

module.exports = {
    getResultExpression,
    getCalc
}