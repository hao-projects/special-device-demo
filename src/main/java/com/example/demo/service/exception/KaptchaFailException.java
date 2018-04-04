package com.example.demo.service.exception;

public class KaptchaFailException extends CustomException {
    private String retCd;
    private String msgDes;
    public KaptchaFailException() {
        super();
    }
    public  KaptchaFailException(String message)
    {
        super(message);
        this.msgDes=message;
    }
    public  KaptchaFailException(String retCd,String message)
    {
        super();
        this.msgDes=message;
        this.retCd=retCd;
    }
    @Override
    public String getCd() {
        return retCd;
    }
    @Override
    public String getMessage() {
        return msgDes;
    }

    @Override
    public void printStackTrace() {
        super.printStackTrace();
    }
}
