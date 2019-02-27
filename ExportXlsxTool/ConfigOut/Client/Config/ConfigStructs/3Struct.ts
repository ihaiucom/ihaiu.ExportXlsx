/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import 3 from "../ConfigExtends/3";



export default class 3Struct extends BaseConfig
{

	// 3 : 3;
	static KEY_3 = "3";




	  static parse(txt: string): 3 
      {
          let csv = toStringArray(txt);
          let config = new 3();
          config.3 =  3.parse(       csvGetString(csv,  0   )   );
          return config;
      }
 


	  static parseArray(txt: string): 3[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:3[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      3.parse(csv[i])          );
           }
          return list;
      }
 

	

}