import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS}  from '@angular/router';

import {PrintComponent} from './print.component';
import { Resume } from './resume';

@Component({
    selector: 'my-app',
    templateUrl: 'app/resume.html',
    styleUrls: ['app/style.min.css', 'app/fontello.min.css'] ,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS 
    ]
})
@Routes([
{
    path: '/dashboard',
    component: PrintComponent,  
}
])
export class ResumeComponent  {
    data = DATA;
    techs = TECHS;
    otherDes = OTHERDES;
    mainDes = MAINDES;
}

var DATA: Resume = {
    "name": "xqMing",           
    "email": "liaoming.lxm@gmail.com",
    "qq": "631663525",
    "weixin": "",
    "nickName": "小丘明",
    "applyJob": "java 后台开发攻城师",
    "userBaseInfo": "1993年9月23日/男/处女座",  
    "educationInfo": "本科/广东财经大学信息学院/2016年应届生",
    "githubUrl": "https://github.com/QiuMing",
    "blogUrl":"",
    "levelOfEnglish": "CET-6",
    "selfIntroduction": "string",
    "signature": "Write the Code. Change the World.",
    "skills":[
        {
            "name": "string",
            "type": "string",
            "description"
             : "string"
        }
    ]
}

var TECHS: tech[] = [
    {
        "name": "Java",
        "width": 80
    },{
        "name": "C",
        "width": 60
    },{
        "name": "python",
        "width": 50
    },{
        "name": "TypeScript",
        "width": 40
    }
]

var MAINDES: string[]=[
    "从创业公司走出来，我经历了一个从零到真正上线的电商项目。我了解其运作模式，亦熟悉其系统架构",
    "我酷爱技术,热衷开源,有能力架构并完成一个中小型系统的搭建。"，
    "我目前正在寻找后端开发工程师岗位，希望借此机会为贵司献上我的一点绵薄之力，快招我到碗里来吧！"
]

var OTHERDES: string[] = [
    "踏实、稳重型攻城狮，爱小丘，爱coding，爱生活",
    "梦想着成为一个架构师，目前在努力加深拓宽自己的技术栈",
    "热爱运动，喜欢羽毛球",
]