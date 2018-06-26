/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieDropConfigReaderStruct extends CsvConfigRender<    MovieDropConfig      >
	{
		path = "MovieDrop";


        ParseCsv(csv: string[] )
        {
			let config = new MovieDropConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
			config.order_num = csvGetInt(csv,  this.GetHeadIndex(  "order_num"  )   );
			config.order_qua =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "order_qua"  )   )   );
			config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );
			config.drop_num = csvGetInt(csv,  this.GetHeadIndex(  "drop_num"  )   );
			config.block1_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block1_drop"  )   )   );
			config.block1_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block1_num"  )   )   );
			config.block2_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block2_drop"  )   )   );
			config.block2_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block2_num"  )   )   );
			config.block3_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block3_drop"  )   )   );
			config.block3_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block3_num"  )   )   );
			config.block4_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block4_drop"  )   )   );
			config.block4_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block4_num"  )   )   );
			config.block5_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block5_drop"  )   )   );
			config.block5_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block5_num"  )   )   );
			config.block6_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block6_drop"  )   )   );
			config.block6_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block6_num"  )   )   );
			config.block7_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block7_drop"  )   )   );
			config.block7_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block7_num"  )   )   );
			config.block8_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block8_drop"  )   )   );
			config.block8_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block8_num"  )   )   );
			config.block9_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block9_drop"  )   )   );
			config.block9_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block9_num"  )   )   );
			config.block10_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block10_drop"  )   )   );
			config.block10_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "block10_num"  )   )   );
			config.city1_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city1_drop"  )   )   );
			config.city1_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city1_num"  )   )   );
			config.city2_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city2_drop"  )   )   );
			config.city2_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city2_num"  )   )   );
			config.city3_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city3_drop"  )   )   );
			config.city3_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city3_num"  )   )   );
			config.city4_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city4_drop"  )   )   );
			config.city4_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city4_num"  )   )   );
			config.city5_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city5_drop"  )   )   );
			config.city5_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city5_num"  )   )   );
			config.city6_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city6_drop"  )   )   );
			config.city6_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city6_num"  )   )   );
			config.city7_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city7_drop"  )   )   );
			config.city7_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city7_num"  )   )   );
			config.city8_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city8_drop"  )   )   );
			config.city8_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city8_num"  )   )   );
			config.city9_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city9_drop"  )   )   );
			config.city9_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city9_num"  )   )   );
			config.city10_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city10_drop"  )   )   );
			config.city10_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "city10_num"  )   )   );
			config.county1_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county1_drop"  )   )   );
			config.county1_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county1_num"  )   )   );
			config.county2_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county2_drop"  )   )   );
			config.county2_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county2_num"  )   )   );
			config.county3_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county3_drop"  )   )   );
			config.county3_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county3_num"  )   )   );
			config.county4_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county4_drop"  )   )   );
			config.county4_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county4_num"  )   )   );
			config.county5_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county5_drop"  )   )   );
			config.county5_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county5_num"  )   )   );
			config.county6_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county6_drop"  )   )   );
			config.county6_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county6_num"  )   )   );
			config.county7_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county7_drop"  )   )   );
			config.county7_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county7_num"  )   )   );
			config.county8_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county8_drop"  )   )   );
			config.county8_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county8_num"  )   )   );
			config.county9_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county9_drop"  )   )   );
			config.county9_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county9_num"  )   )   );
			config.county10_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county10_drop"  )   )   );
			config.county10_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "county10_num"  )   )   );
			config.world1_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world1_drop"  )   )   );
			config.world1_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world1_num"  )   )   );
			config.world2_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world2_drop"  )   )   );
			config.world2_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world2_num"  )   )   );
			config.world3_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world3_drop"  )   )   );
			config.world3_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world3_num"  )   )   );
			config.world4_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world4_drop"  )   )   );
			config.world4_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world4_num"  )   )   );
			config.world5_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world5_drop"  )   )   );
			config.world5_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world5_num"  )   )   );
			config.world6_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world6_drop"  )   )   );
			config.world6_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world6_num"  )   )   );
			config.world7_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world7_drop"  )   )   );
			config.world7_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world7_num"  )   )   );
			config.world8_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world8_drop"  )   )   );
			config.world8_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world8_num"  )   )   );
			config.world9_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world9_drop"  )   )   );
			config.world9_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world9_num"  )   )   );
			config.world10_drop =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world10_drop"  )   )   );
			config.world10_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "world10_num"  )   )   );


			this.addConfig(config);
        }
	}
}