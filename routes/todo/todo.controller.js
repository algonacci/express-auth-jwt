const todo = (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => data.json())
    .then((data) => {
      const todos = {
        userId: data.userId,
        id: data.id,
        title: data.title,
        completed: data.completed,
      };
      return res.status(200).json({
        statusCode: 200,
        data: todos,
      });
    });
};

module.exports = {
  todo,
};
