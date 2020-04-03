
Statistics=function(){
    //n*(n-1)*(n-2)....*1
    this.factorial= function(number){
        let output = 1;
        for(let i = number; i >=1; i-- ){
            output *= i;
        }
        return output;
    };
    this.generalProbability= function(success, total){
        return Math.toPrecision(success/total);
    }
    this.combinations= function(unit, total){
        let output = 0;

        // n!/(r!(n-r)!

        let totalFacto = this.factorial(total);
        let unitFacto = this.factorial(unit);
        let TUFacto = this.factorial(total - unit);

        output = totalFacto /(unitFacto* TUFacto);

        return output
    };
    
    // P probability exp Psuccess, Pfailure, numberOfSuccess, numberOfFailure
    this.bernouliTrial= function(probabilityOfSuccess, numberOfTrial, numberOfSuccess ){
        let output = 0;

        // these variable are created to make the formula clear

        let nFacto = this.factorial(numberOfTrial);
        let sFacto = this.factorial(numberOfSuccess);
        let nsFacto = this.factorial(numberOfTrial- numberOfSuccess);
        let probabilityOfFailure= 1 - probabilityOfSuccess;

        // (n!/(s!(n-s)!))*(ps^n)*pf(n-p)

        output = (nFacto/(sFacto*(nsFacto)))*Math.pow(probabilityOfSuccess, numberOfSuccess) * Math.pow(probabilityOfFailure, numberOfTrial - numberOfSuccess)

        return output
    }

}