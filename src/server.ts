import express from "express";

const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (criar) uma informação 
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

app.get("/test", (request, response) => {
    return response.send("Olá mundo!")
});

app.post("/test-post", (request, response) => {
    return response.send("Olá mundo! rota de post")
})

app.listen(3000, () => console.log("Server is running in http://localhost:3000"));
