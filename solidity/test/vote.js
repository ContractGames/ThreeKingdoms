var ThreeKingdoms = artifacts.require("./ThreeKingdoms.sol");

contract('votetest', function(account){
	console.log(account);
	it("get vote price",function(){
		return ThreeKingdoms.deployed().then(function(instance){
			let kingdomIndex = 1; 
			var obj = instance;
                  	var result = obj.getVotePrice.call(kingdomIndex);
			return result;
		}).then(function(result){
				console.log(result);
				console.log("get vote price successful!");	
			});
		
	});
	it("vote",function(){
		return ThreeKingdoms.deployed().then(function(instance){
	                let sender_value = 1e15;
	                let sender_kingdomIndex = 1;
			var obj = instance;
			var result = obj.vote(sender_kingdomIndex,{from: account[1], value:sender_value});
			return result;
		}).then(function(instance){
				console.log(instance);
				console.log("Transaction successful!");
			}).catch(function(e){
				console.log("Transaction fail!");
		});
	});
	it("get vote balance",function(){
                return ThreeKingdoms.deployed().then(function(instance){
                        let kingdomIndex = 1;
			var obj = instance;
                        var result = obj.getVotes.call(kingdomIndex);
                        return result;
                }).then(function(instance){
                                console.log(instance);
				console.log("get vote balance successful!");
                        }).catch(function(e){
				console.log("get vote balance fail!");
		});
        });
});
