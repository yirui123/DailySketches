function setup() {
  noCanvas();
  const values = [];
  for (let i = 0; i < 30; i++) {
    values[i] = random(1, 200);
  }
  const shape = [2, 5, 3];

  const data = tf.tensor3d(values, shape, 'int32');
  // const data = tf.tensor([0, 0, 127, 255, 100, 50, 24, 54], [2, 2, 2]);
  // data.print();
  console.log(data.toString());
  console.log(data);
}
