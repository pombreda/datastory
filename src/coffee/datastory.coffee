class Datastory

    constructor: (story_file)->
        ds = this
        d3.json story_file, (error, data)->
            ds.story = data
            console.log ds.story

(exports? or this).Datastory = Datastory