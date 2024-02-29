export async function load({ fetch }) {
    // The GraphQL query
    const query = `
        query GetPageByUri {
            pageBy(uri: "installations") {
                title
                content
            }
        }
    `;

    // Making a POST request to the WPGraphQL endpoint
    const res = await fetch('https://sherwoodsystems.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    });

    if (!res.ok) {
        console.error('Failed to fetch page data.');
        return {
            props: {
                error: 'Failed to fetch page data.'
            }
        };
    }

    const { data } = await res.json();

    console.log(data);

    return {
        props: {
            page: data.pageBy
        }
    };
}
