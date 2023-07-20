# Configure a website project
In the projects view, clicking on the project name takes you to the project configuration.

## Index Configuration

The first step in setting up a new project is to configure the source of the content to be included in the search project - we call this the index. The index configuration is a view on the left hand project navigation control, or if the project is new and hasn't yet had an index configured there is a CONFIGURE INDEXING button top right
![Project View](../img/new-project-home.png)

### URLs
#### Start URL
With a website search project the start url provides the root of the indexing job. This could be a specific url, or it could be a sitemap xml document that represents some or all of the content on the website. The domain (e.g. the example.com portion of the start url) controls the main scope of the indexing job. Only content in the same domain will be indexed. If you want to capture content from several domains then multiple url configurations can be created in the same project. 

#### Allowed Path Patterns

#### Blocked Path Patterns

#### XPath

#### Wait XPath

#### Follow Links

### Automatic Document Classification
The Find service includes the ability to automatically give indexed content a classification based on a list of provided labels. This uses a process called Zero Shot classification and is unsupervised, as documents are indexed a classifier determines which of the provided classifications best fits the content. 
::: tip
The accuracy of zero shot classification is improved by making the labels as meaningful and distinct as possible
:::
### Indexed Content Processing
An index can be configured to index content by pages, or if the "split content into paragraphs" option is selected, the content is indexed at the paragraph level. Paragraph indexing increases the granularity of the search results, but can sometimes lose context that is inferable for the full page content.

### Meta Tags to extract
If your content is already categorised (perhaps by your CMS), adding the tags that contain this information in this section means those tags will be extracted, stored, and retrieved as context for the indexed content - this can be useful for faceted search

