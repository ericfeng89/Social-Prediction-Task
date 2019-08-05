var xhr = new XMLHttpRequest();
xhr.open("POST", "https://7k5k1tu2bl.execute-api.us-east-1.amazonaws.com/Production/SaveData", true);
xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded; charset=UTF-8");
xhr.send(JSON.stringify({
  "data":JSON.stringify(30),
  "participant_id":"my_par_8"
}));
