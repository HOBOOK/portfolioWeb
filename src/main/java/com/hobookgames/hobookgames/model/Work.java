package com.hobookgames.hobookgames.model;

public class Work {
    private String title;
    private String date;
    private String information;
    private String imagePath;

    public Work(String nTitle, String nDate, String nInfo, String nImagePath)
    {
        this.title = nTitle;
        this.date = nDate;
        this.information = nInfo;
        this.imagePath = nImagePath;
    }
}
