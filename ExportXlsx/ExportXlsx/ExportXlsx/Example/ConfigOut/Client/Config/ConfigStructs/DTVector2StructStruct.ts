namespace configs
{
	export class DTVector2Struct extends BaseConfig
	{

		x : number;
		y : number;


		  static parse(txt: string): DTVector2 
      {
          let csv = toStringArray(txt);
          let config = new DTVector2();
          config.x = csvGetInt(csv,  i  );
          config.y = csvGetInt(csv,  i  );
          return config;
      }
 


		  static parseArray(txt: string): DTVector2[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTVector2[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTVector2.parse(csv[i])          );
           }
          return list;
      }
 
	}


}