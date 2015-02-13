define(['playbook'], function(playbook) {	
	
	playbook.site_set({key:'init',value:['Dearly beloved', 'We are gathered here today', 'To get through this thing called life']})
	playbook.site_set({key:'onclose',value:['1 cheer 2 many', 'hit the books!']})
	playbook.site_set({key:'onopen',value:['C.R.E.A.M.']})
	
	playbook.site_set({key:'hashes',value:['nfl','nba','mls','nhl','bpl','laliga','ligue1','tennis','golf','bundesliga','mlb','ipl','seriea']})
	
	playbook.site_set({key:'color',value:{ 'onmessage' : '#0052A5', 'onopen' : '#f7a70c', 'onclose' : '#960018'}})
	
	playbook.site_set({key:'connection',value:['ws://localhost:8080']})
	return {		
		loaded:true
	}	
})
