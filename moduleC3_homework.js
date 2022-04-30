
class Devices{
    Devicelist = [];
    constructor(supplyconnection = 'ON', powerusage = 0, name = "") {
        this.supplyconnection = supplyconnection;
        this.powerusage = powerusage;
        this.name = name;
        this.power = false;
        this.getConnections = function(){
            console.log(`Device connected ${name}`)
        }
        this.powerSatus = function(){
            console.log(`${name} powerusage status: ${this.powerusage}`)
        }
        this.turnOn = function(){
            console.log(`${name} turn ON`)
            return this.power = true;

        }
        this.turnOff = function(){
            console.log(`${name} turn OFF`)
            return this.power = false;
        }
    }
}


class Computers extends Devices{
    constructor(videocard, proccessor, selfpowerusage, name, supplyconnection) {
        super(supplyconnection, selfpowerusage, name);
        this.videocard = videocard;
        this.proccessor = proccessor;
        this.selfpowerusage = selfpowerusage;  
        this.name = name;
        this.codingPythion = function(){
            console.log(`Coding with Skillfactory`);
        }
        this.hackingUdemy = function(){
            console.log(`Hacking Udemy`);
        }

    }
}

class Lamps extends Devices{
    constructor(color, mode ,selfpowerusage, name, supplyconnection){
        super(supplyconnection, selfpowerusage, name);
        this.color = color;
        this.mode = mode;
        this.selfpowerusage = selfpowerusage;
        this.name = name;
        this.supplyconnection = supplyconnection;
        this.turnLightMode = function(num){
            if (num != 'y'){
                console.log(`${this.name} mode Hight`)
            }
            else {
                console.log(`${this.name} mode Light`)
            };
        }
    }
}




const workcomp = new Computers('GeForce', 'Intel', 3, 'ALZA');
const worklamp = new Lamps('white', 'light', 1, 'IKEA' );
const notebook = new Computers('AMD', 'AMDRadeon', 2, 'FOXTROT');
const homelight = new Lamps('yellow', 'max', 2, 'APPLE');

function allPowerUsage(){
    console.log((homelight.power ? homelight.powerusage : 0) + (notebook.power ? notebook.powerusage : 0) + (worklamp.power ? notebook.poweruage : 0) + (workcomp.power ? workcomp.powerusage : 0))
}

workcomp.getConnections();
workcomp.powerSatus();
workcomp.turnOn();
workcomp.codingPythion();
workcomp.hackingUdemy();
workcomp.turnOff();
workcomp.turnOn();

worklamp.getConnections();
worklamp.powerSatus();
worklamp.turnOn();
worklamp.turnLightMode('y');
worklamp.turnLightMode();
worklamp.turnOff();

notebook.getConnections();
notebook.powerSatus();
notebook.turnOn();
notebook.turnOff();
notebook.codingPythion();
notebook.hackingUdemy();
notebook.turnOn();

homelight.getConnections();
homelight.powerSatus();
homelight.turnOn();
homelight.turnLightMode();
homelight.turnLightMode('n');
homelight.powerSatus();
homelight.turnOff();


allPowerUsage()