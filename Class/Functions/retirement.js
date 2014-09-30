// JavaScript Document
/*  Input 
		bal -> Initial balance ($)
		intR -> Interest Rate %/year
		nPer -> Compounding periods (Years)
		mDep -> Monthly Deposits acrued till end of the year */
	/*  Output
		Retirement*/

function retire(bal, intR, nPer, mDep) {
	var retirement = bal;
	for(var year = 1; year<=nPer; year++) {
	retirement *= (1+intR/100);
	retirement += (mDep*12);
	}
	return retirement;
}


function retireArray(bal, intR, nPer, mDep) {
	var retirement = [];
	retirement[0] = bal;
	for(var year = 1; year<=nPer; year++) {
	retirement[year] = retirement[year-1]*(1+intR/100);
	retirement[year] += (mDep*12);
	}
	return retirement;
}

// Display table function
/* Inputs
	heading -> Array with column names
	data -> Array with data
   Output
   	str -> formatted table */
function display(heading, data) {
	var str = "";
	str += '<table width="200" border="1" align="center">';
	str += "<tr>";
	for(var col = 0; col < heading.length; col++) {
			str += "<th>" +heading[col]+ "</th>";
	}
	str += "</tr>";
	
	for(var year = 1; year<=data.length; year++) {
		//retirement = retireArray(balance, intRate, year, mDeposit);
		str += "<tr>";
		str += ("<td>"+year+"</td>");
		str += ("<td>$"+data[year].toFixed(2)+"</td>");
		str += "</tr>";
	}
	str += "</table>";
	return str;
}