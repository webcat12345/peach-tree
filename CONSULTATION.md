# Peach Tree Bank Transfer(POC)

Most of main requirements are done, but there are several things that needs some focus while reviewing the project.

### Missing resources
* Icons have white background, because of that I have to make them to have transparent background. It's bit ugly. Apologize.
* Design was provided as a PNG, and it's hard to get all specifications from it, such as colors, paddings, margins etc. Expectation was sketch or whatever...

### Need attention

#### Merchant auto complete feature
There's additional functionality which is getting existing merchant information from the transaction history (only from the server)

#### You can use any CSS framework, but we prefer if you don't.
I used Bootstrap because it's easy to manage theme by colors according to the design. Also it is really easy to manage mobile responsive and other useful css classes.
Also, I am using ng-bootstrap for several UI components and it requires bootstrap as default.

#### Beneficiary sorting
I think there's no specification for this sorting. So I just applied sorting to merchant name when user selects this sort button.

#### Recover sorting status
Once user selects a sort option, there's no way to remove this sorting filter. Because of that, newly added transaction can be placed somewhere in the table, not on the top of the list.
By default, newly added item will be there on the top.

#### Preview functionalty
There's no requirement (design) for the transfer preview window. I applied dialog style solution for it.

#### No spinner, No snackbar for bug reporting
I didn't add any spinner yet. Most places are using observable, so there won't be any spinner, but only some places like transfer and sorting. And there won't any error so I didn't add snackbar too.
Anyway, spinner and snackbar can be easily done as below.
```typescript
try {
  this.isLoading = true;
  // do something
} catch (e) {
  this.toastr.show(e);
} finally {
  this.isLoading = false;
}
```

#### Front-End side sorting and filtering and no pagination
Best practice is to use server side filtering. And for the list, especially table, there needs to be pagination but we don't have it yet.

#### No backend, no in-memory-data-service
I guess your expectation is to use in-memory-data-service at least, but I didn't use that, because it's kinda useless for this stage. Apologize.

#### The transactions list should update immediately at every keystroke.
I implemented debounce time for the search input instead of keystroke trigger. It will require when we do server side filtering to reduce API calls.

#### i18n: add multi-language support
To present i18n, just added only one additional language - French
