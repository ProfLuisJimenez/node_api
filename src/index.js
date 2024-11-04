const app = require("./app");

function main() {
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`API funcionando en el puerto ${port}`);
    });
}

main();