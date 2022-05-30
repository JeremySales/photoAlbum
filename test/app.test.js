const fetchMock = require('jest-fetch-mock');
const getAlbum = require('../app');

describe('App', () => {
    beforeEach(() => {
        fetchMock.enableFetchMocks();
        fetchMock.mockResponseOnce(JSON.stringify([{ id: '1', title: 'title' }]));
        jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        fetchMock.resetMocks();
    });

    it('Should format response correctly', async () => {
        await getAlbum();
        expect(console.log).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('[1] title');
    });

    it('should use correct url when only album is given', async () => {
        await getAlbum('album');
        expect(fetchMock.mock.lastCall[0]).toEqual('https://jsonplaceholder.typicode.com/photos?albumId=album');
    });

    it('should use correct url when album and Id given', async () => {
        await getAlbum('album', 'id');
        expect(fetchMock.mock.lastCall[0]).toEqual('https://jsonplaceholder.typicode.com/photos?albumId=album&id=id');
    });

    it('should use correct url when neither album or Id given', async () => {
        await getAlbum();
        expect(fetchMock.mock.lastCall[0]).toEqual('https://jsonplaceholder.typicode.com/photos');
    });
});