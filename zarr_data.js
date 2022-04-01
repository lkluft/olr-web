import { HTTPStore, openArray, openGroup } from 'https://cdn.skypack.dev/zarr';

export async function getDataVar(varname) {
    const datasource = {
        "store": "https://swift.dkrz.de/v1/dkrz_5819c639-3063-41b4-8f21-91dcf19db4f5/olr-web/",
        "dataset": "olr.zarr"
    };

    const datastore = new HTTPStore(datasource.store);
    let datavar = await openGroup(datastore, datasource.dataset, "r").then(ds => ds.getItem(varname));
    let data = await datavar.getRaw();

    return {
        'data': data.data,
        'units': await datavar.attrs.getItem("units"),
        'shortname': await datavar.attrs.getItem("shortname"),
    }
};
