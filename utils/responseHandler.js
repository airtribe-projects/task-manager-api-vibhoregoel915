const finalResponse = (isSuccess, statusCode, result, messageInfo, res) => {
    if(isSuccess) {
        return res.status(statusCode).json({
            success: isSuccess,
            data: result,
            message: messageInfo,
        })
    }
    else{
        return res.status(statusCode).json({
            success: isSuccess,
            message: messageInfo,
        })  
    }
}


module.exports = {finalResponse};