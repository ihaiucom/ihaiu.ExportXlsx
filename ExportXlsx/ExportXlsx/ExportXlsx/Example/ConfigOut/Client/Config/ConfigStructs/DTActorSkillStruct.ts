/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTActorSkillStruct extends BaseConfig
	{
	

		group_id : number;
		lv : number;


		  static parse(txt: string): DTActorSkill 
      {
          let csv = toStringArray(txt);
          let config = new DTActorSkill();
          config.group_id = csvGetInt(csv,  0 );
          config.lv = csvGetInt(csv,  1 );
          return config;
      }
 


		  static parseArray(txt: string): DTActorSkill[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTActorSkill[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTActorSkill.parse(csv[i])          );
           }
          return list;
      }
 

		
	}


}