(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(8),c=n.n(o),r=n(6),s=n(1),m=n(2),i=n(4),u=n(3),d=n(5),p=(n(14),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={info:{},loaded:!1},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/".concat(this.props.name,"/")).then((function(e){return e.json()})).then((function(t){e.setState({info:t,loaded:!0})}))}},{key:"render",value:function(){var e=this,t=this.state.info,n=t.name,a=t.types,o=t.sprites;return l.a.createElement("div",{className:"col-sm-6 col-md-4"},this.state.loaded&&l.a.createElement("div",{className:"border mb-2 cursor-pointer"},l.a.createElement("div",{onClick:function(){e.props.onPokemonSelect(e.state.info)}},l.a.createElement("img",{src:o.front_default,className:"mx-auto d-block img-fluid",alt:"Pokemon"}),l.a.createElement("p",{className:"text-center font-weight-bold"},n),l.a.createElement("div",{className:"d-flex justify-content-around"},a.map((function(e,t){return l.a.createElement("span",{className:"mb-1 mr-1 p-1 pokemon-type rounded",key:t},"".concat(e.type.name))}))))))}}]),t}(l.a.Component)),E=function(e){var t=e.pokemonsList,n=e.onPokemonSelect;return l.a.createElement("div",{className:"row"},t.map((function(e,t){return l.a.createElement(p,{name:e.name,onPokemonSelect:n,key:t})})))},k=(n(15),function(e){var t=e.pokemon,n=t.name,a=t.types,o=t.stats,c=t.weight,r=t.moves,s=t.sprites;return l.a.createElement("div",{className:"pt-4 sticky-top w-100"},l.a.createElement("img",{src:s.front_default,className:"mx-auto d-block img-fluid",alt:"Pokemon"}),l.a.createElement("h3",{className:"text-center"},n),l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Type"),l.a.createElement("td",null,a.map((function(e){return e.type.name})).join(", "))),l.a.createElement("tr",null,l.a.createElement("td",null,"Attack"),l.a.createElement("td",null,o[4].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"Defense"),l.a.createElement("td",null,o[3].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"HP"),l.a.createElement("td",null,o[5].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"SP Attack"),l.a.createElement("td",null,o[2].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"SP Defense"),l.a.createElement("td",null,o[1].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"Speed"),l.a.createElement("td",null,o[0].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"Weight"),l.a.createElement("td",null,c)),l.a.createElement("tr",null,l.a.createElement("td",null,"Total moves"),l.a.createElement("td",null,r.length)))))}),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={pokemonsList:[],selectedPokemon:null,filter:""},n.onPokemonSelect=function(e){n.setState({selectedPokemon:e})},n.onPokemonLoad=function(){var e=n.state.pokemonsList.length;fetch("https://pokeapi.co/api/v2/pokemon/?limit=12".concat(!!e&&"&offset=".concat(e))).then((function(e){return e.json()})).then((function(e){n.setState({pokemonsList:[].concat(Object(r.a)(n.state.pokemonsList),Object(r.a)(e.results))})}))},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.onPokemonLoad()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h1",{className:"text-center"},"Pokedex"),l.a.createElement(E,{pokemonsList:this.state.pokemonsList,onPokemonSelect:this.onPokemonSelect}),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-primary w-75 my-2",onClick:this.onPokemonLoad},"Load More"))),l.a.createElement("div",{className:"col-sm-4"},this.state.selectedPokemon&&l.a.createElement(k,{pokemon:this.state.selectedPokemon}))))}}]),t}(l.a.Component);c.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ba27a6ac.chunk.js.map