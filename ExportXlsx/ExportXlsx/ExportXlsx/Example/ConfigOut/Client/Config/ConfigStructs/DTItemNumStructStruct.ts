namespace configs
{
	export class DTItemNumStruct extends BaseConfig
	{

		itemId : number;
		itemNum : number;


		  static parse(txt: string): DTItemNum 
      {
          let csv = toStringArray(txt);
          let config = new DTItemNum();
          config.itemId = csvGetInt(csv,  i );
          config.itemNum = csvGetInt(csv,  i );
          return config;
      }
 


		  static parseArray(txt: string): DTItemNum[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTItemNum[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTItemNum.parse(csv[i])          );
           }
          return list;
      }
 
	}


}