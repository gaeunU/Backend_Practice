const schedule = require('node-schedule');

let scheduleObj = null;

const set = (s) =>{
      var rule = new schedule.RecurrenceRule();
      rule.dayOfWeek = s.dayOfWeek; // 수,목,금에만 동작.
      rule.hour = s.hour;
      rule.minute = s.minute;

      // rule에 기반해서 function에 쓰인 매소드가 실행된다.
      var job = schedule.scheduleJob(rule, function(){
        console.log('Scheduler has executed!');
      });

      // 스케쥴리스트에 넣는다.
      scheduleObj=job;
}

const cancel = () => {
    if(scheduleObj != null){
        scheduleObj.cancel();
    }
};

const setScheduler = (s) => {
    cancel();
    set(s);  // 실행
};

const scheduleData = {
    dayOfWeek: [3,4,5],
    hour: 21,
    minute: 24
};

setScheduler(scheduleData);