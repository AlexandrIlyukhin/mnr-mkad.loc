module.exports = {
	columns: 12,
	offset: "30px", //2.75%
	//mobileFirst: true,
	container: {
        maxWidth: "1170px",
        fields: "45px"
    },
	breakPoints: {
        sm: {
            width: "880px"
        },
		xs: {
            width: "700px",
            fields: "15px"
        },
        xss: {
            width: "500px",
            fields: "15px"
        },

        xxs: {
            width: "400px",
            /*
            offset: "10px",
            fields: "5px"
            */
        }
	},
	//detailedCalc: true
};