function status(request, response) {
  response.status(200).json({ chave: "Alunos sao otimos" });
}

export default status;
