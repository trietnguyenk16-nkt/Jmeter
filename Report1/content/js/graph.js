/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 4277.0, "minX": 0.0, "maxY": 24307.0, "series": [{"data": [[0.0, 4277.0], [0.1, 4277.0], [0.2, 4286.0], [0.3, 4286.0], [0.4, 4288.0], [0.5, 4288.0], [0.6, 4288.0], [0.7, 4303.0], [0.8, 4308.0], [0.9, 4308.0], [1.0, 4313.0], [1.1, 4313.0], [1.2, 4316.0], [1.3, 4316.0], [1.4, 4318.0], [1.5, 4318.0], [1.6, 4318.0], [1.7, 4318.0], [1.8, 4321.0], [1.9, 4321.0], [2.0, 4321.0], [2.1, 4321.0], [2.2, 4326.0], [2.3, 4326.0], [2.4, 4327.0], [2.5, 4327.0], [2.6, 4327.0], [2.7, 4327.0], [2.8, 4328.0], [2.9, 4328.0], [3.0, 4330.0], [3.1, 4330.0], [3.2, 4331.0], [3.3, 4331.0], [3.4, 4331.0], [3.5, 4332.0], [3.6, 4332.0], [3.7, 4332.0], [3.8, 4332.0], [3.9, 4333.0], [4.0, 4333.0], [4.1, 4333.0], [4.2, 4334.0], [4.3, 4334.0], [4.4, 4335.0], [4.5, 4335.0], [4.6, 4335.0], [4.7, 4337.0], [4.8, 4337.0], [4.9, 4337.0], [5.0, 4337.0], [5.1, 4337.0], [5.2, 4338.0], [5.3, 4338.0], [5.4, 4338.0], [5.5, 4338.0], [5.6, 4338.0], [5.7, 4339.0], [5.8, 4339.0], [5.9, 4340.0], [6.0, 4340.0], [6.1, 4340.0], [6.2, 4340.0], [6.3, 4341.0], [6.4, 4341.0], [6.5, 4342.0], [6.6, 4342.0], [6.7, 4343.0], [6.8, 4343.0], [6.9, 4343.0], [7.0, 4343.0], [7.1, 4345.0], [7.2, 4345.0], [7.3, 4345.0], [7.4, 4345.0], [7.5, 4346.0], [7.6, 4346.0], [7.7, 4347.0], [7.8, 4347.0], [7.9, 4348.0], [8.0, 4348.0], [8.1, 4348.0], [8.2, 4348.0], [8.3, 4349.0], [8.4, 4349.0], [8.5, 4349.0], [8.6, 4349.0], [8.7, 4351.0], [8.8, 4351.0], [8.9, 4351.0], [9.0, 4351.0], [9.1, 4354.0], [9.2, 4354.0], [9.3, 4357.0], [9.4, 4357.0], [9.5, 4360.0], [9.6, 4360.0], [9.7, 4369.0], [9.8, 4370.0], [9.9, 4370.0], [10.0, 4383.0], [10.1, 4383.0], [10.2, 4408.0], [10.3, 4408.0], [10.4, 4443.0], [10.5, 4443.0], [10.6, 4444.0], [10.7, 4444.0], [10.8, 4468.0], [10.9, 4468.0], [11.0, 4655.0], [11.1, 4655.0], [11.2, 4765.0], [11.3, 4765.0], [11.4, 4793.0], [11.5, 4793.0], [11.6, 4806.0], [11.7, 4806.0], [11.8, 4811.0], [11.9, 4811.0], [12.0, 4822.0], [12.1, 4822.0], [12.2, 4823.0], [12.3, 4823.0], [12.4, 4831.0], [12.5, 4831.0], [12.6, 4835.0], [12.7, 4835.0], [12.8, 4837.0], [12.9, 4837.0], [13.0, 4839.0], [13.1, 4839.0], [13.2, 4845.0], [13.3, 4845.0], [13.4, 4845.0], [13.5, 4845.0], [13.6, 4850.0], [13.7, 4850.0], [13.8, 4851.0], [13.9, 4851.0], [14.0, 4852.0], [14.1, 4852.0], [14.2, 4857.0], [14.3, 4857.0], [14.4, 4858.0], [14.5, 4858.0], [14.6, 4859.0], [14.7, 4859.0], [14.8, 4859.0], [14.9, 4859.0], [15.0, 4860.0], [15.1, 4860.0], [15.2, 4861.0], [15.3, 4861.0], [15.4, 4861.0], [15.5, 4861.0], [15.6, 4864.0], [15.7, 4864.0], [15.8, 4864.0], [15.9, 4864.0], [16.0, 4865.0], [16.1, 4865.0], [16.2, 4866.0], [16.3, 4866.0], [16.4, 4867.0], [16.5, 4867.0], [16.6, 4868.0], [16.7, 4868.0], [16.8, 4870.0], [16.9, 4870.0], [17.0, 4870.0], [17.1, 4870.0], [17.2, 4871.0], [17.3, 4871.0], [17.4, 4871.0], [17.5, 4871.0], [17.6, 4872.0], [17.7, 4872.0], [17.8, 4873.0], [17.9, 4873.0], [18.0, 4873.0], [18.1, 4873.0], [18.2, 4874.0], [18.3, 4874.0], [18.4, 4879.0], [18.5, 4879.0], [18.6, 4880.0], [18.7, 4880.0], [18.8, 4881.0], [18.9, 4881.0], [19.0, 4881.0], [19.1, 4881.0], [19.2, 4882.0], [19.3, 4882.0], [19.4, 4882.0], [19.5, 4882.0], [19.6, 4882.0], [19.7, 4882.0], [19.8, 4883.0], [19.9, 4883.0], [20.0, 4884.0], [20.1, 4884.0], [20.2, 4886.0], [20.3, 4886.0], [20.4, 4888.0], [20.5, 4888.0], [20.6, 4888.0], [20.7, 4888.0], [20.8, 4889.0], [20.9, 4889.0], [21.0, 4890.0], [21.1, 4890.0], [21.2, 4890.0], [21.3, 4890.0], [21.4, 4890.0], [21.5, 4890.0], [21.6, 4891.0], [21.7, 4891.0], [21.8, 4891.0], [21.9, 4891.0], [22.0, 4892.0], [22.1, 4892.0], [22.2, 4892.0], [22.3, 4892.0], [22.4, 4892.0], [22.5, 4892.0], [22.6, 4893.0], [22.7, 4893.0], [22.8, 4894.0], [22.9, 4894.0], [23.0, 4895.0], [23.1, 4895.0], [23.2, 4896.0], [23.3, 4896.0], [23.4, 4896.0], [23.5, 4896.0], [23.6, 4897.0], [23.7, 4897.0], [23.8, 4898.0], [23.9, 4898.0], [24.0, 4898.0], [24.1, 4898.0], [24.2, 4900.0], [24.3, 4900.0], [24.4, 4900.0], [24.5, 4900.0], [24.6, 4900.0], [24.7, 4900.0], [24.8, 4900.0], [24.9, 4900.0], [25.0, 4901.0], [25.1, 4901.0], [25.2, 4901.0], [25.3, 4901.0], [25.4, 4901.0], [25.5, 4901.0], [25.6, 4903.0], [25.7, 4903.0], [25.8, 4903.0], [25.9, 4903.0], [26.0, 4905.0], [26.1, 4905.0], [26.2, 4907.0], [26.3, 4907.0], [26.4, 4907.0], [26.5, 4907.0], [26.6, 4908.0], [26.7, 4908.0], [26.8, 4909.0], [26.9, 4909.0], [27.0, 4910.0], [27.1, 4910.0], [27.2, 4910.0], [27.3, 4910.0], [27.4, 4911.0], [27.5, 4911.0], [27.6, 4911.0], [27.7, 4911.0], [27.8, 4912.0], [27.9, 4912.0], [28.0, 4912.0], [28.1, 4912.0], [28.2, 4913.0], [28.3, 4913.0], [28.4, 4917.0], [28.5, 4917.0], [28.6, 4918.0], [28.7, 4918.0], [28.8, 4919.0], [28.9, 4919.0], [29.0, 4920.0], [29.1, 4920.0], [29.2, 4920.0], [29.3, 4920.0], [29.4, 4929.0], [29.5, 4929.0], [29.6, 4930.0], [29.7, 4930.0], [29.8, 4931.0], [29.9, 4931.0], [30.0, 4936.0], [30.1, 4936.0], [30.2, 4939.0], [30.3, 4939.0], [30.4, 4943.0], [30.5, 4943.0], [30.6, 4955.0], [30.7, 4955.0], [30.8, 4961.0], [30.9, 4961.0], [31.0, 4972.0], [31.1, 4972.0], [31.2, 4974.0], [31.3, 4974.0], [31.4, 4975.0], [31.5, 4975.0], [31.6, 4982.0], [31.7, 4982.0], [31.8, 4995.0], [31.9, 4995.0], [32.0, 5000.0], [32.1, 5000.0], [32.2, 5005.0], [32.3, 5005.0], [32.4, 5027.0], [32.5, 5027.0], [32.6, 5027.0], [32.7, 5027.0], [32.8, 5028.0], [32.9, 5028.0], [33.0, 5035.0], [33.1, 5035.0], [33.2, 5039.0], [33.3, 5039.0], [33.4, 5047.0], [33.5, 5047.0], [33.6, 5055.0], [33.7, 5055.0], [33.8, 5066.0], [33.9, 5066.0], [34.0, 5067.0], [34.1, 5067.0], [34.2, 5073.0], [34.3, 5073.0], [34.4, 5090.0], [34.5, 5090.0], [34.6, 5092.0], [34.7, 5092.0], [34.8, 5093.0], [34.9, 5093.0], [35.0, 5097.0], [35.1, 5097.0], [35.2, 5118.0], [35.3, 5118.0], [35.4, 5119.0], [35.5, 5119.0], [35.6, 5225.0], [35.7, 5225.0], [35.8, 5242.0], [35.9, 5242.0], [36.0, 5269.0], [36.1, 5269.0], [36.2, 5300.0], [36.3, 5300.0], [36.4, 5305.0], [36.5, 5305.0], [36.6, 5313.0], [36.7, 5313.0], [36.8, 5313.0], [36.9, 5326.0], [37.0, 5326.0], [37.1, 5327.0], [37.2, 5327.0], [37.3, 5328.0], [37.4, 5328.0], [37.5, 5332.0], [37.6, 5332.0], [37.7, 5334.0], [37.8, 5334.0], [37.9, 5337.0], [38.0, 5337.0], [38.1, 5337.0], [38.2, 5337.0], [38.3, 5338.0], [38.4, 5338.0], [38.5, 5338.0], [38.6, 5338.0], [38.7, 5338.0], [38.8, 5338.0], [38.9, 5340.0], [39.0, 5340.0], [39.1, 5340.0], [39.2, 5340.0], [39.3, 5341.0], [39.4, 5341.0], [39.5, 5342.0], [39.6, 5342.0], [39.7, 5342.0], [39.8, 5342.0], [39.9, 5342.0], [40.0, 5342.0], [40.1, 5343.0], [40.2, 5343.0], [40.3, 5343.0], [40.4, 5343.0], [40.5, 5344.0], [40.6, 5344.0], [40.7, 5345.0], [40.8, 5345.0], [40.9, 5346.0], [41.0, 5346.0], [41.1, 5348.0], [41.2, 5348.0], [41.3, 5348.0], [41.4, 5348.0], [41.5, 5348.0], [41.6, 5348.0], [41.7, 5350.0], [41.8, 5350.0], [41.9, 5350.0], [42.0, 5350.0], [42.1, 5351.0], [42.2, 5351.0], [42.3, 5351.0], [42.4, 5351.0], [42.5, 5351.0], [42.6, 5351.0], [42.7, 5352.0], [42.8, 5352.0], [42.9, 5352.0], [43.0, 5352.0], [43.1, 5352.0], [43.2, 5352.0], [43.3, 5353.0], [43.4, 5353.0], [43.5, 5354.0], [43.6, 5354.0], [43.7, 5355.0], [43.8, 5355.0], [43.9, 5355.0], [44.0, 5355.0], [44.1, 5355.0], [44.2, 5355.0], [44.3, 5356.0], [44.4, 5356.0], [44.5, 5356.0], [44.6, 5356.0], [44.7, 5356.0], [44.8, 5356.0], [44.9, 5357.0], [45.0, 5357.0], [45.1, 5357.0], [45.2, 5357.0], [45.3, 5357.0], [45.4, 5357.0], [45.5, 5358.0], [45.6, 5358.0], [45.7, 5359.0], [45.8, 5359.0], [45.9, 5359.0], [46.0, 5359.0], [46.1, 5359.0], [46.2, 5359.0], [46.3, 5360.0], [46.4, 5360.0], [46.5, 5361.0], [46.6, 5361.0], [46.7, 5362.0], [46.8, 5362.0], [46.9, 5362.0], [47.0, 5362.0], [47.1, 5362.0], [47.2, 5362.0], [47.3, 5363.0], [47.4, 5363.0], [47.5, 5363.0], [47.6, 5363.0], [47.7, 5363.0], [47.8, 5363.0], [47.9, 5363.0], [48.0, 5363.0], [48.1, 5364.0], [48.2, 5364.0], [48.3, 5364.0], [48.4, 5364.0], [48.5, 5365.0], [48.6, 5365.0], [48.7, 5365.0], [48.8, 5365.0], [48.9, 5365.0], [49.0, 5365.0], [49.1, 5366.0], [49.2, 5366.0], [49.3, 5366.0], [49.4, 5366.0], [49.5, 5366.0], [49.6, 5366.0], [49.7, 5367.0], [49.8, 5367.0], [49.9, 5369.0], [50.0, 5369.0], [50.1, 5370.0], [50.2, 5370.0], [50.3, 5371.0], [50.4, 5371.0], [50.5, 5373.0], [50.6, 5373.0], [50.7, 5374.0], [50.8, 5374.0], [50.9, 5374.0], [51.0, 5374.0], [51.1, 5374.0], [51.2, 5374.0], [51.3, 5375.0], [51.4, 5375.0], [51.5, 5377.0], [51.6, 5377.0], [51.7, 5377.0], [51.8, 5377.0], [51.9, 5378.0], [52.0, 5378.0], [52.1, 5378.0], [52.2, 5378.0], [52.3, 5381.0], [52.4, 5381.0], [52.5, 5382.0], [52.6, 5382.0], [52.7, 5383.0], [52.8, 5383.0], [52.9, 5384.0], [53.0, 5384.0], [53.1, 5386.0], [53.2, 5386.0], [53.3, 5387.0], [53.4, 5387.0], [53.5, 5387.0], [53.6, 5387.0], [53.7, 5390.0], [53.8, 5390.0], [53.9, 5390.0], [54.0, 5390.0], [54.1, 5391.0], [54.2, 5391.0], [54.3, 5393.0], [54.4, 5393.0], [54.5, 5394.0], [54.6, 5394.0], [54.7, 5394.0], [54.8, 5394.0], [54.9, 5394.0], [55.0, 5394.0], [55.1, 5395.0], [55.2, 5395.0], [55.3, 5397.0], [55.4, 5397.0], [55.5, 5398.0], [55.6, 5398.0], [55.7, 5399.0], [55.8, 5399.0], [55.9, 5400.0], [56.0, 5400.0], [56.1, 5402.0], [56.2, 5402.0], [56.3, 5403.0], [56.4, 5403.0], [56.5, 5405.0], [56.6, 5405.0], [56.7, 5407.0], [56.8, 5407.0], [56.9, 5408.0], [57.0, 5408.0], [57.1, 5412.0], [57.2, 5412.0], [57.3, 5413.0], [57.4, 5413.0], [57.5, 5414.0], [57.6, 5414.0], [57.7, 5414.0], [57.8, 5414.0], [57.9, 5415.0], [58.0, 5415.0], [58.1, 5416.0], [58.2, 5416.0], [58.3, 5419.0], [58.4, 5419.0], [58.5, 5421.0], [58.6, 5421.0], [58.7, 5421.0], [58.8, 5421.0], [58.9, 5421.0], [59.0, 5421.0], [59.1, 5423.0], [59.2, 5423.0], [59.3, 5426.0], [59.4, 5426.0], [59.5, 5427.0], [59.6, 5427.0], [59.7, 5427.0], [59.8, 5427.0], [59.9, 5428.0], [60.0, 5428.0], [60.1, 5429.0], [60.2, 5429.0], [60.3, 5429.0], [60.4, 5429.0], [60.5, 5430.0], [60.6, 5430.0], [60.7, 5430.0], [60.8, 5430.0], [60.9, 5430.0], [61.0, 5430.0], [61.1, 5430.0], [61.2, 5430.0], [61.3, 5430.0], [61.4, 5430.0], [61.5, 5431.0], [61.6, 5431.0], [61.7, 5431.0], [61.8, 5431.0], [61.9, 5431.0], [62.0, 5431.0], [62.1, 5431.0], [62.2, 5431.0], [62.3, 5433.0], [62.4, 5433.0], [62.5, 5434.0], [62.6, 5434.0], [62.7, 5434.0], [62.8, 5434.0], [62.9, 5434.0], [63.0, 5434.0], [63.1, 5435.0], [63.2, 5435.0], [63.3, 5435.0], [63.4, 5435.0], [63.5, 5435.0], [63.6, 5435.0], [63.7, 5435.0], [63.8, 5435.0], [63.9, 5435.0], [64.0, 5435.0], [64.1, 5436.0], [64.2, 5436.0], [64.3, 5436.0], [64.4, 5436.0], [64.5, 5436.0], [64.6, 5436.0], [64.7, 5436.0], [64.8, 5436.0], [64.9, 5437.0], [65.0, 5437.0], [65.1, 5437.0], [65.2, 5437.0], [65.3, 5437.0], [65.4, 5437.0], [65.5, 5438.0], [65.6, 5438.0], [65.7, 5438.0], [65.8, 5438.0], [65.9, 5438.0], [66.0, 5438.0], [66.1, 5439.0], [66.2, 5439.0], [66.3, 5439.0], [66.4, 5439.0], [66.5, 5439.0], [66.6, 5439.0], [66.7, 5439.0], [66.8, 5439.0], [66.9, 5441.0], [67.0, 5441.0], [67.1, 5441.0], [67.2, 5441.0], [67.3, 5441.0], [67.4, 5441.0], [67.5, 5441.0], [67.6, 5441.0], [67.7, 5442.0], [67.8, 5442.0], [67.9, 5442.0], [68.0, 5442.0], [68.1, 5443.0], [68.2, 5443.0], [68.3, 5444.0], [68.4, 5444.0], [68.5, 5444.0], [68.6, 5444.0], [68.7, 5444.0], [68.8, 5444.0], [68.9, 5445.0], [69.0, 5445.0], [69.1, 5446.0], [69.2, 5446.0], [69.3, 5446.0], [69.4, 5446.0], [69.5, 5447.0], [69.6, 5447.0], [69.7, 5448.0], [69.8, 5448.0], [69.9, 5448.0], [70.0, 5448.0], [70.1, 5449.0], [70.2, 5449.0], [70.3, 5449.0], [70.4, 5449.0], [70.5, 5450.0], [70.6, 5450.0], [70.7, 5450.0], [70.8, 5450.0], [70.9, 5450.0], [71.0, 5450.0], [71.1, 5451.0], [71.2, 5451.0], [71.3, 5451.0], [71.4, 5451.0], [71.5, 5451.0], [71.6, 5451.0], [71.7, 5452.0], [71.8, 5452.0], [71.9, 5452.0], [72.0, 5452.0], [72.1, 5453.0], [72.2, 5453.0], [72.3, 5453.0], [72.4, 5453.0], [72.5, 5454.0], [72.6, 5454.0], [72.7, 5454.0], [72.8, 5454.0], [72.9, 5455.0], [73.0, 5455.0], [73.1, 5456.0], [73.2, 5456.0], [73.3, 5456.0], [73.4, 5456.0], [73.5, 5459.0], [73.6, 5459.0], [73.7, 5460.0], [73.8, 5460.0], [73.9, 5460.0], [74.0, 5460.0], [74.1, 5460.0], [74.2, 5460.0], [74.3, 5462.0], [74.4, 5462.0], [74.5, 5463.0], [74.6, 5463.0], [74.7, 5465.0], [74.8, 5465.0], [74.9, 5469.0], [75.0, 5469.0], [75.1, 5470.0], [75.2, 5470.0], [75.3, 5470.0], [75.4, 5470.0], [75.5, 5470.0], [75.6, 5470.0], [75.7, 5471.0], [75.8, 5471.0], [75.9, 5471.0], [76.0, 5471.0], [76.1, 5472.0], [76.2, 5472.0], [76.3, 5482.0], [76.4, 5482.0], [76.5, 5483.0], [76.6, 5483.0], [76.7, 5486.0], [76.8, 5486.0], [76.9, 5486.0], [77.0, 5486.0], [77.1, 5486.0], [77.2, 5486.0], [77.3, 5489.0], [77.4, 5489.0], [77.5, 5496.0], [77.6, 5496.0], [77.7, 5496.0], [77.8, 5496.0], [77.9, 5496.0], [78.0, 5496.0], [78.1, 5501.0], [78.2, 5501.0], [78.3, 5526.0], [78.4, 5526.0], [78.5, 5531.0], [78.6, 5531.0], [78.7, 5545.0], [78.8, 5545.0], [78.9, 5546.0], [79.0, 5546.0], [79.1, 5548.0], [79.2, 5548.0], [79.3, 5587.0], [79.4, 5587.0], [79.5, 5587.0], [79.6, 5587.0], [79.7, 5587.0], [79.8, 5587.0], [79.9, 5603.0], [80.0, 5603.0], [80.1, 5610.0], [80.2, 5610.0], [80.3, 5615.0], [80.4, 5615.0], [80.5, 5647.0], [80.6, 5647.0], [80.7, 5647.0], [80.8, 5647.0], [80.9, 5653.0], [81.0, 5653.0], [81.1, 5665.0], [81.2, 5665.0], [81.3, 5666.0], [81.4, 5666.0], [81.5, 5692.0], [81.6, 5692.0], [81.7, 5728.0], [81.8, 5728.0], [81.9, 5843.0], [82.0, 5843.0], [82.1, 5854.0], [82.2, 5854.0], [82.3, 5854.0], [82.4, 5854.0], [82.5, 5857.0], [82.6, 5857.0], [82.7, 5857.0], [82.8, 5857.0], [82.9, 5864.0], [83.0, 5864.0], [83.1, 5864.0], [83.2, 5864.0], [83.3, 5866.0], [83.4, 5866.0], [83.5, 5867.0], [83.6, 5867.0], [83.7, 5870.0], [83.8, 5870.0], [83.9, 5870.0], [84.0, 5870.0], [84.1, 5871.0], [84.2, 5871.0], [84.3, 5871.0], [84.4, 5871.0], [84.5, 5876.0], [84.6, 5876.0], [84.7, 5877.0], [84.8, 5877.0], [84.9, 5878.0], [85.0, 5878.0], [85.1, 5878.0], [85.2, 5878.0], [85.3, 5879.0], [85.4, 5879.0], [85.5, 5880.0], [85.6, 5880.0], [85.7, 5882.0], [85.8, 5882.0], [85.9, 5882.0], [86.0, 5882.0], [86.1, 5890.0], [86.2, 5890.0], [86.3, 5891.0], [86.4, 5891.0], [86.5, 5903.0], [86.6, 5903.0], [86.7, 5905.0], [86.8, 5905.0], [86.9, 5907.0], [87.0, 5907.0], [87.1, 5907.0], [87.2, 5907.0], [87.3, 5930.0], [87.4, 5930.0], [87.5, 5933.0], [87.6, 5933.0], [87.7, 5950.0], [87.8, 5950.0], [87.9, 5997.0], [88.0, 5997.0], [88.1, 6022.0], [88.2, 6022.0], [88.3, 6087.0], [88.4, 6087.0], [88.5, 6171.0], [88.6, 6171.0], [88.7, 6440.0], [88.8, 6440.0], [88.9, 6446.0], [89.0, 6446.0], [89.1, 6478.0], [89.2, 6478.0], [89.3, 7144.0], [89.4, 7144.0], [89.5, 7644.0], [89.6, 7644.0], [89.7, 7921.0], [89.8, 7921.0], [89.9, 8198.0], [90.0, 8198.0], [90.1, 8207.0], [90.2, 8207.0], [90.3, 8208.0], [90.4, 8208.0], [90.5, 8312.0], [90.6, 8312.0], [90.7, 8639.0], [90.8, 8639.0], [90.9, 8646.0], [91.0, 8646.0], [91.1, 8790.0], [91.2, 8790.0], [91.3, 8930.0], [91.4, 8930.0], [91.5, 9092.0], [91.6, 9092.0], [91.7, 9131.0], [91.8, 9131.0], [91.9, 9160.0], [92.0, 9160.0], [92.1, 9207.0], [92.2, 9207.0], [92.3, 9268.0], [92.4, 9268.0], [92.5, 9757.0], [92.6, 9757.0], [92.7, 9927.0], [92.8, 9927.0], [92.9, 10223.0], [93.0, 10223.0], [93.1, 10258.0], [93.2, 10258.0], [93.3, 10414.0], [93.4, 10414.0], [93.5, 11174.0], [93.6, 11174.0], [93.7, 11265.0], [93.8, 11265.0], [93.9, 11298.0], [94.0, 11298.0], [94.1, 11819.0], [94.2, 11819.0], [94.3, 12154.0], [94.4, 12154.0], [94.5, 12744.0], [94.6, 12744.0], [94.7, 12793.0], [94.8, 12793.0], [94.9, 13247.0], [95.0, 13247.0], [95.1, 14103.0], [95.2, 14103.0], [95.3, 15200.0], [95.4, 15200.0], [95.5, 17321.0], [95.6, 17321.0], [95.7, 17827.0], [95.8, 17827.0], [95.9, 19219.0], [96.0, 19219.0], [96.1, 19361.0], [96.2, 19361.0], [96.3, 19392.0], [96.4, 19392.0], [96.5, 20180.0], [96.6, 20180.0], [96.7, 20638.0], [96.8, 20638.0], [96.9, 20823.0], [97.0, 20823.0], [97.1, 20868.0], [97.2, 20868.0], [97.3, 21029.0], [97.4, 21029.0], [97.5, 21037.0], [97.6, 21037.0], [97.7, 21038.0], [97.8, 21038.0], [97.9, 21050.0], [98.0, 21050.0], [98.1, 21072.0], [98.2, 21072.0], [98.3, 21080.0], [98.4, 21080.0], [98.5, 21228.0], [98.6, 21228.0], [98.7, 21245.0], [98.8, 21245.0], [98.9, 22491.0], [99.0, 22491.0], [99.1, 22816.0], [99.2, 22816.0], [99.3, 23302.0], [99.4, 23302.0], [99.5, 23710.0], [99.6, 23710.0], [99.7, 23874.0], [99.8, 23874.0], [99.9, 24307.0], [100.0, 24307.0]], "isOverall": false, "label": "POST Submit Survey", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 4200.0, "maxY": 111.0, "series": [{"data": [[4200.0, 3.0], [4300.0, 48.0], [4400.0, 4.0], [4600.0, 1.0], [4800.0, 63.0], [4700.0, 2.0], [5100.0, 2.0], [4900.0, 39.0], [5000.0, 16.0], [5300.0, 98.0], [5200.0, 3.0], [5400.0, 111.0], [5600.0, 9.0], [5500.0, 9.0], [5800.0, 23.0], [5700.0, 1.0], [5900.0, 8.0], [6100.0, 1.0], [6000.0, 2.0], [6400.0, 3.0], [7100.0, 1.0], [7600.0, 1.0], [7900.0, 1.0], [8100.0, 1.0], [8200.0, 2.0], [8300.0, 1.0], [8700.0, 1.0], [8600.0, 2.0], [9200.0, 2.0], [9100.0, 2.0], [8900.0, 1.0], [9000.0, 1.0], [9700.0, 1.0], [9900.0, 1.0], [10200.0, 2.0], [10400.0, 1.0], [11200.0, 2.0], [11100.0, 1.0], [12100.0, 1.0], [11800.0, 1.0], [12700.0, 2.0], [13200.0, 1.0], [14100.0, 1.0], [15200.0, 1.0], [17300.0, 1.0], [17800.0, 1.0], [19300.0, 2.0], [19200.0, 1.0], [20100.0, 1.0], [20800.0, 2.0], [21200.0, 2.0], [21000.0, 6.0], [20600.0, 1.0], [22400.0, 1.0], [22800.0, 1.0], [23300.0, 1.0], [24300.0, 1.0], [23800.0, 1.0], [23700.0, 1.0]], "isOverall": false, "label": "POST Submit Survey", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 494.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 494.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.583333333333333, "minX": 1.66006758E12, "maxY": 12.058823529411766, "series": [{"data": [[1.66006788E12, 5.6333333333333355], [1.6600677E12, 5.633333333333335], [1.66006806E12, 10.543478260869565], [1.660068E12, 5.633333333333335], [1.66006758E12, 12.058823529411766], [1.66006782E12, 6.116666666666667], [1.66006776E12, 5.583333333333333], [1.66006794E12, 5.616666666666666], [1.66006764E12, 5.700000000000002]], "isOverall": false, "label": "POST Submit Survey", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66006806E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 4992.081250000004, "minX": 1.0, "maxY": 23710.0, "series": [{"data": [[8.0, 10117.25], [2.0, 9160.0], [9.0, 12497.25], [10.0, 11570.0], [11.0, 8901.333333333334], [12.0, 15029.666666666666], [3.0, 20868.0], [13.0, 17260.0], [14.0, 12524.666666666666], [15.0, 17642.0], [16.0, 15239.0], [4.0, 23710.0], [1.0, 9092.0], [17.0, 14718.0], [18.0, 7671.0], [19.0, 19610.0], [20.0, 9954.666666666666], [5.0, 4992.081250000004], [21.0, 9990.0], [22.0, 18774.85714285714], [6.0, 5370.280575539566], [7.0, 6380.666666666667]], "isOverall": false, "label": "POST Submit Survey", "isController": false}, {"data": [[6.579999999999995, 6225.135999999998]], "isOverall": false, "label": "POST Submit Survey-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 22.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1471.0666666666666, "minX": 1.66006758E12, "maxY": 85333.0, "series": [{"data": [[1.66006788E12, 85333.0], [1.6600677E12, 85333.0], [1.66006806E12, 57175.46666666667], [1.660068E12, 85333.0], [1.66006758E12, 48355.333333333336], [1.66006782E12, 85333.0], [1.66006776E12, 85333.0], [1.66006794E12, 85333.0], [1.66006764E12, 85333.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66006788E12, 2596.0], [1.6600677E12, 2596.0], [1.66006806E12, 1730.6666666666667], [1.660068E12, 2596.0], [1.66006758E12, 1471.0666666666666], [1.66006782E12, 2596.0], [1.66006776E12, 2596.0], [1.66006794E12, 2596.0], [1.66006764E12, 2596.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66006806E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 5119.9833333333345, "minX": 1.66006758E12, "maxY": 11509.617647058823, "series": [{"data": [[1.66006788E12, 5170.449999999999], [1.6600677E12, 5166.633333333333], [1.66006806E12, 11341.630434782606], [1.660068E12, 5219.516666666668], [1.66006758E12, 11509.617647058823], [1.66006782E12, 5669.633333333332], [1.66006776E12, 5119.9833333333345], [1.66006794E12, 5149.366666666668], [1.66006764E12, 5163.183333333333]], "isOverall": false, "label": "POST Submit Survey", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66006806E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 5033.400000000002, "minX": 1.66006758E12, "maxY": 11390.0, "series": [{"data": [[1.66006788E12, 5082.133333333334], [1.6600677E12, 5077.166666666668], [1.66006806E12, 8470.065217391304], [1.660068E12, 5126.283333333333], [1.66006758E12, 11390.0], [1.66006782E12, 5566.000000000001], [1.66006776E12, 5033.400000000002], [1.66006794E12, 5061.700000000001], [1.66006764E12, 5072.583333333331]], "isOverall": false, "label": "POST Submit Survey", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66006806E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 138.13333333333335, "minX": 1.66006758E12, "maxY": 6023.413043478264, "series": [{"data": [[1.66006788E12, 152.6833333333333], [1.6600677E12, 157.99999999999997], [1.66006806E12, 6023.413043478264], [1.660068E12, 143.46666666666658], [1.66006758E12, 4532.823529411765], [1.66006782E12, 596.9999999999999], [1.66006776E12, 138.13333333333335], [1.66006794E12, 148.40000000000003], [1.66006764E12, 146.78333333333333]], "isOverall": false, "label": "POST Submit Survey", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66006806E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 4277.0, "minX": 1.66006758E12, "maxY": 24307.0, "series": [{"data": [[1.66006788E12, 5907.0], [1.6600677E12, 5903.0], [1.66006806E12, 23874.0], [1.660068E12, 5950.0], [1.66006758E12, 24307.0], [1.66006782E12, 12744.0], [1.66006776E12, 5907.0], [1.66006794E12, 5890.0], [1.66006764E12, 6087.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66006788E12, 5583.1], [1.6600677E12, 5642.6], [1.66006806E12, 20845.0], [1.660068E12, 5689.4], [1.66006758E12, 22653.5], [1.66006782E12, 6432.4], [1.66006776E12, 5450.6], [1.66006794E12, 5485.6], [1.66006764E12, 5612.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66006788E12, 5907.0], [1.6600677E12, 5903.0], [1.66006806E12, 23874.0], [1.660068E12, 5950.0], [1.66006758E12, 24307.0], [1.66006782E12, 12744.0], [1.66006776E12, 5907.0], [1.66006794E12, 5890.0], [1.66006764E12, 6087.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66006788E12, 5870.3], [1.6600677E12, 5875.75], [1.66006806E12, 23585.89999999999], [1.660068E12, 5869.2], [1.66006758E12, 23553.25], [1.66006782E12, 10184.599999999993], [1.66006776E12, 5862.95], [1.66006794E12, 5878.7], [1.66006764E12, 5877.6]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66006788E12, 4318.0], [1.6600677E12, 4303.0], [1.66006806E12, 4360.0], [1.660068E12, 4330.0], [1.66006758E12, 4277.0], [1.66006782E12, 4288.0], [1.66006776E12, 4286.0], [1.66006794E12, 4321.0], [1.66006764E12, 4316.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66006788E12, 5364.5], [1.6600677E12, 5355.0], [1.66006806E12, 6443.0], [1.660068E12, 5365.5], [1.66006758E12, 9169.0], [1.66006782E12, 5411.5], [1.66006776E12, 5332.0], [1.66006794E12, 5356.5], [1.66006764E12, 5337.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66006806E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 5247.0, "minX": 1.0, "maxY": 21044.0, "series": [{"data": [[1.0, 5363.0], [4.0, 10839.5], [2.0, 5247.0], [5.0, 9207.0], [3.0, 6171.0], [7.0, 13247.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 21044.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 13085.0, "series": [{"data": [[1.0, 5278.0], [4.0, 10680.0], [2.0, 5087.0], [5.0, 9055.0], [3.0, 6085.0], [7.0, 13085.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66006758E12, "maxY": 1.0, "series": [{"data": [[1.66006788E12, 1.0], [1.6600677E12, 1.0], [1.66006806E12, 0.6666666666666666], [1.660068E12, 1.0], [1.66006758E12, 0.6666666666666666], [1.66006782E12, 1.0], [1.66006776E12, 1.0], [1.66006794E12, 1.0], [1.66006764E12, 1.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66006806E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.66006758E12, "maxY": 1.0, "series": [{"data": [[1.66006788E12, 1.0], [1.6600677E12, 1.0], [1.66006806E12, 0.6666666666666666], [1.660068E12, 1.0], [1.66006758E12, 0.5666666666666667], [1.66006782E12, 1.0], [1.66006776E12, 1.0], [1.66006794E12, 1.0], [1.66006764E12, 1.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.66006806E12, 0.1]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66006806E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.66006758E12, "maxY": 1.0, "series": [{"data": [[1.66006806E12, 0.1]], "isOverall": false, "label": "POST Submit Survey-failure", "isController": false}, {"data": [[1.66006788E12, 1.0], [1.6600677E12, 1.0], [1.66006806E12, 0.6666666666666666], [1.660068E12, 1.0], [1.66006758E12, 0.5666666666666667], [1.66006782E12, 1.0], [1.66006776E12, 1.0], [1.66006794E12, 1.0], [1.66006764E12, 1.0]], "isOverall": false, "label": "POST Submit Survey-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66006806E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.66006758E12, "maxY": 1.0, "series": [{"data": [[1.66006788E12, 1.0], [1.6600677E12, 1.0], [1.66006806E12, 0.6666666666666666], [1.660068E12, 1.0], [1.66006758E12, 0.5666666666666667], [1.66006782E12, 1.0], [1.66006776E12, 1.0], [1.66006794E12, 1.0], [1.66006764E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.66006806E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66006806E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

