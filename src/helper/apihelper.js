import axios from 'axios';

const BASE_URL = 'https://exhr-1744/api/beta/users/admin@tenant-exhr-1744.com/currentCollections/AsyncTasks';

export { getItems, getParsedData };

//window.setInterval(getItems, 5000);

function getItems() {
    const url = `${BASE_URL}/items`;
    return axios.get(url, { headers: { Authorization: `Basic YWRtaW5AdGVuYW50LWV4aHItMTc0NC5jb206SiRwMXRlcg==`, Prefer: `exchange.behavior=ApplicationData`, Origin: `null`, 'Cache-Control': `no-cache` 
} }).then(response => response.data);
}

function getParsedData() {
    var dat = getData();
    var retValue = dat.value.map(val => {
        var prog = val.Status === "Success" ? 100 : val.Status === "NotYetStarted" ? 0: Math.floor(Math.random() * 100);
        var time = val.Status === "Success" ? Math.round(Math.random() * 500) : 0;
        var timems = time === 0 ? '-' : time + " ms";
        return {
            JobId: val.Id,
            progress: prog,
            TotalTime: timems,
            status: prog === 100
            ? "Done"
            : prog === 0 ? "Waiting To Start" : "In Progress"
        }
    });

    return retValue;
}

function getData() {
    return {
        "value": [
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7SAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUqdQ==\"",
                "Status": "NotYetStarted",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7SAAAA0",
                "CreatedDateTime": "2018-03-22T12:44:08.5683905Z",
                "LastModifiedDateTime": "2018-03-22T12:44:08.7073866Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            },
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7JAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUqAA==\"",
                "Status": "Success",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7JAAAA0",
                "CreatedDateTime": "2018-03-22T08:45:16.747916Z",
                "LastModifiedDateTime": "2018-03-22T08:45:18.068926Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            },
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7IAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUp/A==\"",
                "Status": "NotYetStarted",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7IAAAA0",
                "CreatedDateTime": "2018-03-22T08:44:16.1993753Z",
                "LastModifiedDateTime": "2018-03-22T08:44:16.2213765Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            },
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7HAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUp+g==\"",
                "Status": "NotYetStarted",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7HAAAA0",
                "CreatedDateTime": "2018-03-22T08:42:23.597243Z",
                "LastModifiedDateTime": "2018-03-22T08:42:23.6202434Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            },
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7GAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUp+A==\"",
                "Status": "NotYetStarted",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7GAAAA0",
                "CreatedDateTime": "2018-03-22T08:41:33.4434283Z",
                "LastModifiedDateTime": "2018-03-22T08:41:33.9904481Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            },
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7FAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUp9g==\"",
                "Status": "NotYetStarted",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7FAAAA0",
                "CreatedDateTime": "2018-03-22T08:39:41.589185Z",
                "LastModifiedDateTime": "2018-03-22T08:39:41.6271838Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            },
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7EAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUp9A==\"",
                "Status": "NotYetStarted",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7EAAAA0",
                "CreatedDateTime": "2018-03-22T08:38:32.5506177Z",
                "LastModifiedDateTime": "2018-03-22T08:38:32.5826204Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            },
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7DAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUp8A==\"",
                "Status": "NotYetStarted",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7DAAAA0",
                "CreatedDateTime": "2018-03-22T08:28:06.9807533Z",
                "LastModifiedDateTime": "2018-03-22T08:28:07.6217646Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            },
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7CAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUp8g==\"",
                "Status": "Success",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7CAAAA0",
                "CreatedDateTime": "2018-03-22T08:26:07.8589663Z",
                "LastModifiedDateTime": "2018-03-22T08:36:20.5719552Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            },
            {
                "@odata.id": "https://exhr-4179/api/beta/Users('1807876d-0a5e-4841-8870-4c81650762e6@18a76b4b-f88e-4a88-98a9-b39c63d6119a')/CurrentCollections('LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0')/Items('RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7BAAAA0')",
                "@odata.etag": "W/\"+Fpy2Qq3WEaQTIy1/CrGQQAAAaUp7A==\"",
                "Status": "NotYetStarted",
                "Id": "RgAAAAAmVOYkFCXER4Ba5UnLANP0BwD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAD4WnLZCrdYRpBMjLX8KsZBAAABpb7BAAAA0",
                "CreatedDateTime": "2018-03-22T08:24:47.8579888Z",
                "LastModifiedDateTime": "2018-03-22T08:24:48.2769999Z",
                "ItemClass": "AsyncTasks",
                "SecondaryKey": null
            }
        ],
        "@odata.nextLink": "https://exhr-4179/api/beta/users/admin@tenant-exhr-4179.com/currentCollections/LgAAAAAmVOYkFCXER4Ba5UnLANP0AQD4WnLZCrdYRpBMjLX8KsZBAAABpSQ9AAAB0/items/?%24top=10&%24skiptoken=MyZRVkZCUVVGQlFVRXZMeTh2THk4dkx5OHZPRXRCUVVGQlRYRk1RV2h2VDJabmExTjBURkkxVkZKUFdGTnhaejA5"
    };
}