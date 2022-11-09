const todo = (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((data) => data.json())
    .then((data) => {
      return res.status(200).json({
        statusCode: 200,
        data: data,
      });
    });
};

module.exports = {
  todo,
};
