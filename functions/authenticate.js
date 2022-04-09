const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const data = await getCollection();
  const body = JSON.parse(event.body);
  console.log(body)
  try {
    const user = await data.findOne({ email: { $eq: body.email }});
    console.log(user)
    if(!user){
      return {
        statusCode: 401,
        body: JSON.stringify("Email doesn't exist'"),
      };
    }
    if(user.password !== body.password){
      return {
        statusCode: 401,
        body: JSON.stringify("Password is wrong"),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};

