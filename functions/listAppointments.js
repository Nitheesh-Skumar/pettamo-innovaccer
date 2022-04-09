const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const data = await getCollection();
  const body = JSON.parse(event.body);
  console.log(body)
  try {

let query={rel_type:  { $eq:'appointment' },rel_id:{ $eq:body.rel_id }}
if(body.pet){
    query.pet = { $eq:body.pet }
}
if(body.serviceType){
  query.serviceType = { $eq:body.serviceType }
}

    const list = await data.find(query);
    return {
      statusCode: 200,
      body: JSON.stringify(list),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
