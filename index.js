'use strict';
const {Wit,log} = require('node-wit');
const {interactive} = require('node-wit');
var Botkit = require('./node_modules/botkit/lib/Botkit.js');

var controller = Botkit.sparkbot({
    debug: true,
    log: true,
    public_address: 'https://4f1fbe9a.ngrok.io',
    ciscospark_access_token: 'ZGFlODY2NmYtYzIxMy00MDEwLWIzNDItNWU5ZWMxNWViNzI4MDYwZjA1MGQtZTgz'
});


const firstEntityValue = (entities, entity) => {
  const val = entities && entities[entity] &&
    Array.isArray(entities[entity]) &&
    entities[entity].length > 0 &&
    entities[entity][0].value
  ;
  if (!val) {
    return null;
  }
  return typeof val === 'object' ? val.value : val;
};

const actions = {
  send(request, response) {
    const {sessionId, context, entities} = request;
    const {text, quickreplies} = response;
    console.log('sending...', JSON.stringify(response));
  },
getperiod({context, entities}) {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date2 = date+' '+time;
var date2 = new Date(Date.parse(date2));

var test = firstEntityValue(entities, 'datetime');
var date1 = new Date(Date.parse(test));

var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

//console.log(diffDays);

if (diffDays >=29){
context.days_more=1;
delete context.days_less;
}
else {
context.days_less=1;
delete context.days_more;
}
    return context;
  },


getsymptoms({context, entities}) {
var symp = firstEntityValue(entities, 'symptoms_entity');
if (symp) {

context.urination=false;
context.nausea=false;
context.dizziness=false;
context.morning=false;
context.exhausted=false;
context.vomiting=false;
context.joint=false;
context.bleeding=false;
context.mood=false;
context.constipation=false;
context.diabetes=false;
context.abdominal=false;


if (symp.toString().trim() === 'urination'){
console.log('----------urination');
context.urination=true;
delete context.nausea;
delete context.dizziness;
delete context.morning;
delete context.exhausted;
delete context.vomiting;
delete context.joint;
delete context.bleeding;
delete context.mood;
delete context.constipation;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'nausea'){
console.log('----------nausea');
context.nausea=true;
delete context.urination;
delete context.dizziness;
delete context.morning;
delete context.exhausted;
delete context.vomiting;
delete context.joint;
delete context.bleeding;
delete context.mood;
delete context.constipation;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'dizziness'){
console.log('----------dizziness');
context.dizziness=true;
delete context.urination;
delete context.nausea;
delete context.morning;
delete context.exhausted;
delete context.vomiting;
delete context.joint;
delete context.bleeding;
delete context.mood;
delete context.constipation;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'morning'){
console.log('----------morning');
context.morning=true;
delete context.urination;
delete context.nausea;
delete context.dizziness;
delete context.exhausted;
delete context.vomiting;
delete context.joint;
delete context.bleeding;
delete context.mood;
delete context.constipation;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'exhausted'){
console.log('----------exhausted');
context.exhausted=true;
delete context.urination;
delete context.nausea;
delete context.dizziness;
delete context.morning;
delete context.vomiting;
delete context.joint;
delete context.bleeding;
delete context.mood;
delete context.constipation;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'vomiting'){
console.log('----------vomiting');
context.vomiting=true;
delete context.urination;
delete context.nausea;
delete context.dizziness;
delete context.morning;
delete context.exhausted;
delete context.joint;
delete context.bleeding;
delete context.mood;
delete context.constipation;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'joint'){
console.log('----------joint');
context.joint=true;
delete context.urination;
delete context.nausea;
delete context.dizziness;
delete context.morning;
delete context.exhausted;
delete context.vomiting;
delete context.bleeding;
delete context.mood;
delete context.constipation;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'bleeding'){
console.log('----------bleeding');
context.bleeding=true;
delete context.urination;
delete context.nausea;
delete context.dizziness;
delete context.morning;
delete context.exhausted;
delete context.vomiting;
delete context.joint;
delete context.mood;
delete context.constipation;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'mood'){
console.log('----------mood');
context.mood=true;
delete context.urination;
delete context.nausea;
delete context.dizziness;
delete context.morning;
delete context.exhausted;
delete context.vomiting;
delete context.joint;
delete context.bleeding;
delete context.constipation;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'constipation'){
console.log('----------constipation');
context.constipation=true;
delete context.urination;
delete context.nausea;
delete context.dizziness;
delete context.morning;
delete context.exhausted;
delete context.vomiting;
delete context.joint;
delete context.bleeding;
delete context.mood;
delete context.diabetes;
delete context.abdominal;
}
else if (symp.toString().trim() === 'diabetes'){
console.log('----------diabetes');
context.diabetes=true;
delete context.urination;
delete context.nausea;
delete context.dizziness;
delete context.morning;
delete context.exhausted;
delete context.vomiting;
delete context.joint;
delete context.bleeding;
delete context.mood;
delete context.constipation;
delete context.abdominal;
}
else if (symp.toString().trim() === 'abdominal'){
console.log('----------abdominal');
context.abdominal=true;
delete context.urination;
delete context.nausea;
delete context.dizziness;
delete context.morning;
delete context.exhausted;
delete context.vomiting;
delete context.joint;
delete context.bleeding;
delete context.mood;
delete context.constipation;
delete context.diabetes;
}
}
    return context;
  },

};
const client = new Wit({accessToken: '6PW7FFDNRN2CQQJB6Q3ATPCERSPB5I5X',actions});
//interactive(client);

var bot = controller.spawn({
});
controller.setupWebserver(process.env.PORT || 3000, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, bot, function() {
        console.log("SPARK: Webhooks set up!");
    });
});


//+++++ @@@@@@@@@@@@@@@@@
const sessionId = 'my-user-session-42';
//++++++++

controller.on('direct_message', function(bot, message) {

client.converse(sessionId, message.text, {})
.then((data) => {
	//var results = JSON.stringify(data);
	//var results = JSON.stringify(data);
	// il faut tester sur msg si existe !!!
	//bot.reply(message,data.msg);
	//console.dir(results.msg);
	console.log("'''''''''''''''''''''''''''");
	console.dir(data);
	console.log("'''''''''''''''''''''''''''");
  //console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
})
.catch(console.error);

});





