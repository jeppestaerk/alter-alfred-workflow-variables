# alter-alfred-workflow-variables [![Build Status](https://travis-ci.org/jeppestaerk/alter-alfred-workflow-variables.svg?branch=master)](https://travis-ci.org/jeppestaerk/alter-alfred-workflow-variables)

> Alter Alfred workflow environment variables


## Install

```
$ npm install alter-alfred-workflow-variables
```


## Usage

```js
const variables = require('alter-alfred-workflow-variables');

variables.set('foo', 'bar');

variables.get('foo');
//=> 'bar'

variables.has('foo');
//=> true
```

> **WARNING:** As of Alfred 3.4.1, Alfred takes several seconds to notice when info.plist has been updated by something other than itself. As a result, relying on altering info.plist programmatically can be problematic, as Alfred won't notice the changes for several seconds (5–10 seconds is typical on my machine). If you update a workflow variable in info.plist and run your workflow again immediately, it is unlikely that Alfred will have picked up the change.
> **Don't forget:** any changes you make to info.plist only take effect the next time the workflow is run. This likely doesn't matter in most cases, but if you need a variable to be updated immediately (i.e. also for the current workflow run), you must also set it "live" using one of the methods described in the Setting variables section above.
*Source [[HOW TO] Workflow/environment variables](https://www.alfredforum.com/topic/9070-how-to-workflowenvironment-variables/)*


## License

MIT © [Jeppe Stærk](https://staerk.io)
