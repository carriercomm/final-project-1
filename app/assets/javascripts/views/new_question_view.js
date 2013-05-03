SU.Views.NewQuestionView = Backbone.View.extend({
  initialize: function () {

  },

  events: {
    "click button#submit-question": "postQuestion"
  },

  template: JST["questions/new"],

  render: function () {
    var renderedContent = this.template();

    this.$el.html(renderedContent);

    return this;
  },

  postQuestion: function (event) {
    var that = this;
    console.log("Posting question");

    this.model.set({
      "title": this.$('#question_title').val(),
      "body": this.$('#question_body').val(),
    });

    this.model.save({}, {
      success: function () {
        SU.Store.allQuestions.add(that.model);
        Backbone.history.navigate('#/questions');
      }
    });
  },
});
