namespace configs
{
	export class DTStoryNumStruct extends BaseConfig
	{

		star : number;
		num : number;


		  static parse(txt: string): DTStoryNum 
      {
          let csv = toStringArray(txt);
          let config = new DTStoryNum();
          config.star = csvGetInt(csv,  i );
          config.num = csvGetInt(csv,  i );
          return config;
      }
 


		  static parseArray(txt: string): DTStoryNum[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTStoryNum[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTStoryNum.parse(csv[i])          );
           }
          return list;
      }
 
	}


}