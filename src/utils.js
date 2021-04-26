export const isEnterCode = (keycode) => keycode === 13;
export const convertStoMs = (s) => s * 1000;
export const getFormattedDate = (ms) => new Date(ms).toLocaleString();

export const groupAttachmentsByType = (attachments) => {
    return attachments?.reduce((groupedAttachments, attachment) => {
        return {
            ...groupedAttachments,
            [attachment.type]: groupedAttachments[attachment.type] ? [...groupedAttachments[attachment.type], attachment[attachment.type]] : [attachment[attachment.type]]
        }
    }, {});
};

