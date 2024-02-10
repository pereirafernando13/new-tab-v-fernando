test("Meu primeiro test", callbackfunction);

function callbackfunction() {
  console.log("Essa funcao esta funcionando");
}

test("Segundo test", function () {
  console.log("esta tambem funciona?");
});

test("terceiro test", () => {
  console.log("e agora?");
});

test("Espero que um seja 1", () => {
  expect(1).toBe(1);
});
