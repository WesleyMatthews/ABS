let sourcesString = "Graamans, L; Baeza, E; van den Dobbelsteen, A; Tsafaras, I; Stanghellini, C.(2018). Plant factories versus greenhouses: Comparison of resource use efficiency. Agricultural Systems. Vol. 160:November, pp. 31–43. Available: DOI: 10.1016/j.agsy.2017.11.003\nEarthbuddies.(2018, May 4). <i>5 Reasons Why Vertical Farming is the Future of humankind</i>. (2018). Earthbuddies. Retrieved February 15, 2020 from https://earthbuddies.net/vertical-farming/\nNCEE.(2019). Finland: Instructional System. (2019). National Center of Education and The Economy. Retrieved February 20, 2020 from http://ncee.org/what-we-do/center-on-international-education-benchmarking/top-performing-countries/finland-overview/finland-instructional-systems/\nAmerican Heart Association. (2020, January 9). What is the Mediterranean Diet? Retrieved April 28, 2020, from https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/mediterranean-diet\nFAO. (2010). Jordan Nutrition Profile. Retrieved April 28, 2020, from http://www.fao.org/ag/agn/nutrition/jor_en.stm\nUS Department of Energy. (n.d.). Biofuels Basics. Retrieved February 20, 2020, from https://www.energy.gov/eere/bioenergy/biofuels-basics\nTu, J. (2001, March 8). Nutrition and Fasting in Vietnamese Culture. Retrieved April 28, 2020, from https://ethnomed.org/resource/nutrition-and-fasting-in-vietnamese-culture/\nPiccirilli Dorsey, Inc. (2017, October 3). Fact Sheet - Biogas: Converting Waste to Energy. Retrieved April 29, 2020, from https://www.eesi.org/papers/view/fact-sheet-biogasconverting-waste-to-energy\nSen, A. (2015). Harvard Public Health Review: A Student Publication. Retrieved April 28, 2020, from http://harvardpublichealthreview.org/universal-health-care-the-affordable-dream/\nFood and Agriculture Organization of the United Nations. (2011). Global Food Losses and Food Waste. Retrieved February 20, 2020, from http://www.fao.org/3/a-i2697e.pdf\nFriedlander, B. (2017, June 13). Cornell engineers transform food waste into green energy. Retrieved February 20, 2020, from http://news.cornell.edu/stories/2017/06/cornell-engineers-transform-food-waste-green-energy\nLewis, J. (2018, October 6). EPA's Report on the Environmental Impacts of Biofuels. Retrieved from https://www.catf.us/2018/07/epa-report-environmental-impacts-biofuels/\nEnvironmental Protection Agency. (2020, March 2). Basic Information about Landfills. Retrieved from https://www.epa.gov/landfills/basic-information-about-landfills\nYasinski, E. (2020, February 26). On the Road to 3-D Printed Organs. Retrieved March 20, 2020, from https://www.the-scientist.com/news-opinion/on-the-road-to-3-d-printed-organs-67187\nMoxon, S. (2020, April 7). 3D-printed organs: Stuff of science fiction or an answer to the organ transplant shortage? Retrieved from https://geneticliteracyproject.org/2020/04/06/3d-printed-organs-stuff-of-science-fiction-or-an-answer-to-the-organ-transplant-shortage/\nKelly, C. (2020, March 3). 3D-Printed Organs Nearing Clinical Trials. Retrieved March 20, 2020, from https://www.asme.org/topics-resources/content/3d-printed-organs-nearing-clinical-trials";

let sources = sourcesString.split("\n");
sources.sort();
sourcesString = "";
for (let i = 0; i < sources.length; ++i) {
  sourcesString += "<p class='px-2 pt-2'>" + sources[i] + "</p>";
}
document.getElementById("sources").innerHTML = sourcesString;