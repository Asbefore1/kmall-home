<ul class="pagination">
	{{#pageArray}}
		{{#disabled}}
			<li class="pagination-item disabled" data-value='{{value}}'>{{name}}</li>
		{{/disabled}}

		{{^disabled}}
			{{#active}}
				<li class="pagination-item active" data-value='{{value}}'>{{name}}</li>
			{{/active}}
			{{^active}}
				<li class="pagination-item" data-value='{{value}}'>{{name}}</li>
			{{/active}}
		{{/disabled}}

	{{/pageArray}}
	<li class="page-num">{{current}}/{{pages}}</li>
</ul>