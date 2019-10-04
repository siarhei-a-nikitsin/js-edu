/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const masterLevelInJs = 800;
      const bacislevel = 500;

      let summaryHours = masterLevelInJs;

      if(!knowsProgramming){
        summaryHours += bacislevel;
      }

      const speedInHours = config[focus];

      const result = Math.ceil(summaryHours / speedInHours);

      return result;
  };
  