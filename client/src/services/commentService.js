import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (consoleId) => {
    const query = new URLSearchParams({
        where: `consoleId="${consoleId}"`
    });

    const result = await request.get(`${baseUrl}`);

    // TODO: temp solution until migration to collections service 
    return Object.values(result).filter(comment => comment.consoleId === consoleId);
};

export const create = async (consoleId, username, text) => {
    const newComment = await request.post(baseUrl, {
        consoleId,
        username, 
        text,
    });

    return newComment;
};
